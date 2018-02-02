import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 3, name: "Piqué", role: "Defender", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 4, name: "I. Rakitic", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 5, name: "Sergio", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 6, name: "Denis Suárez", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 7, name: "Arda", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 8, name: "A. Iniesta", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 9, name: "Suárez", role: "Forward", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 10, name: "Messi", role: "Forward", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 11, name: "Neymar", role: "Forward", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 12, name: "Rafinha", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 13, name: "Cillessen", role: "Goalkeeper", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 14, name: "Mascherano", role: "Defender", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 17, name: "Paco Alcácer", role: "Forward", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 18, name: "Jordi Alba", role: "Defender", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 19, name: "Digne", role: "Defender", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 21, name: "André Gomes", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 23, name: "Umtiti", role: "Defender", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 24, name: "Mathieu", role: "Defender", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
        { id: 25, name: "Masip", role: "Goalkeeper", image: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
