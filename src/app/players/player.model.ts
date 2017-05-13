export class Player {
    constructor(private id: number,
                private firstName: string,
                private lastName: string,
                private imgPath: string,
                private height: number,
                private weight: number,
                private armLength: number,
                private hands: number,
                private college_id: number,
                private college: {id:number, name:string, conference_id:number, conference: {id:number, name:string}},
                private position: {id:number, name:string},
                private test: any,
                private teams: {id:number, name: string, pivot: {player_id:number, team_id:number, draftOverall:number, draftRound:number, round:number}}[]) {}
}
