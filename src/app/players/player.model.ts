export class Player {
    constructor(public id: number,
                public firstName: string,
                public lastName: string,
                public imgPath: string,
                public height: number,
                public weight: number,
                public armLength: number,
                public hands: number,
                public college_id: number,
                public college: {id:number, name:string, conference_id:number, conference: {id:number, name:string}},
                public position: {id:number, name:string},
                public tests: {id: number, name: string, pivot: {player_id:number, test_id: number, result:number}}[],
                public teams: {id:number, name: string, pivot: {player_id:number, team_id:number, draftOverall:number, draftRound:number, round:number}}[]) {}
}
