import { 
  SubscribeMessage, 
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  WsResponse
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3001, { namespace: 'chat' })
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  private logger: Logger = new Logger('AppGateway');
  afterInit(server: Server) {
    this.logger.log('Initialized');
  }
  handleConnection(client: Socket) {
    this.logger.log(`Client connected ${client.id}`);
    client.join('GENERAL_ROOM');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected ${client.id}`);

  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    console.log('RECEIVE MESSAGE FRапаOM CLIENT');
    console.log('PAYLOAD', data);
    client.broadcast.emit('msgToClient', data);
    // return { event: 'msgToClient', data}
  }
}
