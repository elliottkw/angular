import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    show = true;

    phrase: any = {
        message: 'Great power require great resposability',
        author:  'Ben Parker'
    };

    characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']; 
}