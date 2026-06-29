import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(protected http: HttpClient) {
    this.socket = io({
      path: '/api/socket.io',
    });
  }
  public startTime = 0;
  public x = 0;
  public y = 0;

  public enabled = false;
  public clicked = false;

  private socket: Socket;

  @HostListener('document:pointerdown', ['$event'])
  public startTimer(e: any): void {
    //don't run if not enabled
    if (!this.enabled) {
      return;
    }
    //don't run if correct mouse button wasn't clicked.  I think a touch equals a left click?
    if (e.button != 0) {
      return;
    }
    if (e.target.nodeName.toLowerCase() !== 'body') {
      return;
    }
    this.x = e.clientX;
    this.y = e.clientY;
    this.clicked = true;
    this.startTime = +new Date();
  }

  @HostListener('document:pointermove', ['$event'])
  public moveRock(e: any): void {
    //don't run if not enabled
    if (!this.enabled) {
      return;
    }
    if (!this.clicked) {
      return;
    }
    this.x = e.clientX;
    this.y = e.clientY;
  }

  @HostListener('document:pointerup', ['$event'])
  public async placeRock(e: any) {
    //don't run if not enabled
    if (!this.enabled) {
      return;
    }
    if (!this.clicked) {
      return;
    }
    //don't run if correct mouse button wasn't clicked.  I think a touch equals a left click?
    if (e.button != 0) {
      return;
    }
    if (e.target.nodeName.toLowerCase() !== 'body') {
      return;
    }

    let duration = (+new Date() - this.startTime) / 1000;
    const audioCtx = new window.AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    const xRatio = this.x / window.innerWidth;
    const yRatio = this.y / window.innerHeight;

    const rock = this.createRock(xRatio, yRatio, duration);
    document.body.appendChild(rock);

    const frequency = (this.x / window.innerWidth) * 1000 + 200;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);

    let localX = this.x;
    let localY = this.y;

    const res = await fetch('/api/add-rock', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '^gzJcKaMN%UiXguhbk9EcT4J!rt$A()oPb^vexS4',
      },
      body: JSON.stringify({
        localX,
        localY,
      }),
    });
    const json = await res.json();
    this.socket.emit('new-rock-client', { xRatio, yRatio, duration });
    this.clicked = false;
    setTimeout(() => document.body.removeChild(rock), 1000);
  }

  public createRock(xRatio: number, yRatio: number, duration: number): any {
    const x = xRatio * window.innerWidth;
    const y = yRatio * window.innerHeight;
    const rock = document.createElement('div');
    rock.innerText = '🪨';
    rock.style.position = 'absolute';
    rock.style.left = x + 'px';
    rock.style.top = y + 'px';
    rock.style.pointerEvents = 'none';
    rock.style.fontSize = `${30 + 15 * duration}px`;
    return rock;
  }

  public triggerRocks(e: Event): void {
    this.enabled = !this.enabled;
    document.getElementById('rockButton')!.textContent =
      `${this.enabled ? 'Disable' : 'Enable'} Rocks`;
    this.socket[this.enabled ? 'on' : 'off']('new-rock-server', this.newRockListener.bind(this));
  }

  public newRockListener(msg: any): void {
    const rock = this.createRock(msg.xRatio, msg.yRatio, msg.duration);
    document.body.appendChild(rock);
    setTimeout(() => document.body.removeChild(rock), 1000);
  }

  public async getStatus(e: any) {
    this.http
      .get('/api/status', {
        headers: {
          'x-api-key': '^gzJcKaMN%UiXguhbk9EcT4J!rt$A()oPb^vexS4',
        },
      })
      .subscribe(
        (response) => {
          let status: any = response;
          this.showToast(status.message);
        },
        (error) => {
          console.error(error.message);
        },
      );
  }

  public showToast(message: any): void {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    toast.className = 'toast';
    toast.innerText = message;

    container!.appendChild(toast);
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 1000);
  }
}
