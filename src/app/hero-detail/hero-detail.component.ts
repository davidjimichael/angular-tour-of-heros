import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location,
    ) {}
    ngOnInit() {}
}