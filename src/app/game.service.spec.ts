import { TestBed } from '@angular/core/testing';

import { Game } from './game.service';

describe('GameService', () => {
  let service: Game;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Game);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
