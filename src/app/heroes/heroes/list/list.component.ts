import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = [
    'Spider-Man',
    'Iron Man',
    'Thor',
    'Hulk',
    'Captain America',
    'Black Widow',
    'Doctor Strange',
    'Wolverine',
    'Black Panther',
    'Ant-Man'
  ];

  public deletedHeroName?: string;

  resetLastHero(): void {
    this.deletedHeroName = this.heroNames.pop() ?? ''

  }
}
