import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  WsResponse,
  BaseWsExceptionFilter,
  WsException
} from '@nestjs/websockets';
import { Logger, ValidationPipe, UsePipes, UseFilters, WsExceptionFilter } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

import { CreateMessage } from './dto/create-message.dto';

@WebSocketGateway(3001, { namespace: 'chat' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

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

  // @UsePipes(new ValidationPipe())
  // @UseFilters(new WsExceptionFilter())
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: CreateMessage,
    @ConnectedSocket() client: Socket,
  ) {
    client.broadcast.emit('msgToClient', data);
    // throw new WsException('Invalid credentials.');

    return { event: 'msgToClient', data };
  }

  @SubscribeMessage('error')
  errorHandleMessage() {
    console.log('ERROR')
  }
}
