import { server_rooms } from '../data/rtc';

//
// const getPath = () => {
//   const paths = new Set(rooms.map((item) => item.path));
//   let new_path = '';

//   do {
//     new_path = Math.round(Math.random() * 1000);
//   } while (!paths.has(new_path));

//   return new_path;
// };

//
export class NspRooms {
  constructor(io) {
    this.io = io;
    this.nsp = io.of('rooms');
  }

  // --------

  emitToRoom(room, event_name, data) {
    this.nsp.to(room).emit(event_name, data);
  }

  emitToUser(name, data) {
    this.io.to(`${name}`, data);
  }

  // ------

  getRoomIx({ title }) {
    const room_ix = server_rooms.findIndex((item) => item.title === title);
    return room_ix;
  }

  getUserIx({ user, title }) {
    const room_ix = this.getRoomIx({ title });

    if (room_ix < 0) {
      return -1;
    }

    const room = server_rooms[room_ix];
    const user_ix = room.users.findIndex((item) => item.name === user.name);
    return user_ix;
  }

  detectHasRoom({ title }) {
    return this.getRoomIx({ title }) >= 0;
  }

  detectInRoom({ user, title }) {
    return this.getUserIx({ user, title }) >= 0;
  }

  // ----------

  createRoom() {
    this.io.on('create_room', (data) => {
      const { user, type, title } = data;
      const room_ix = this.getRoomIx({ title });

      if (room_ix >= 0) {
        this.emitToUser(user.name, "Room's title has existed");
        return;
      }

      this.nsp.join(title);
      const new_room = {
        type: type,
        title: title,
        users: [user],
      };
      server_rooms.push(new_room);
      this.nsp.emit('create_room', new_room);
    });
  }

  joinRoom() {
    this.io.on('join_room', (data) => {
      const { user, type, title } = data;
      const room_ix = this.getRoomIx({ title });

      if (room_ix < 0) {
        return;
      }

      const room = server_rooms[room_ix];
      const user_ix = this.getUserIx({ user, title });

      if (user_ix >= 0) {
        return;
      }

      this.nsp.join(title);
      room.users.push(user);
      this.emitToRoom(title, 'join_room', data);
    });
  }

  quitRoom() {
    this.io.on('quit_room', (data) => {
      const { user, type, title } = data;
      const room_ix = this.getRoomIx({ title });

      if (room_ix < 0) {
        return;
      }

      const room = server_rooms[room_ix];
      const user_ix = this.getUserIx({ user, title });

      if (user_ix < 0) {
        return;
      }
      room.users.splice(user_ix, 1);
      if (room.users.length === 0) {
        server_rooms.splice(room_ix, 1);
        this.nsp.emit('delete_room', data.title);
        return;
      }

      this.emitToRoom(title, 'quit_room', data);
    });
  }

  streamVideo() {
    this.io.on('stream_video', (data) => {
      if (data.type !== 'video') {
        return;
      }

      this.emitToRoom(data.title, 'stream_video', data);
    });
  }
}
