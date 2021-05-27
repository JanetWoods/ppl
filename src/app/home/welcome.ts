import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.html',
    styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit{
    pageTitle: string = "WELCOME --Wanna Dance?";

    constructor(){}

    ngOnInit(): void{}
}