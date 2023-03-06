export class Suggestion{
    public name!:string;
    public profPic!:string;
    public bio!:string;
    public pic!:string;
    public followers!:number;


    constructor(name:string, profPic:string, bio:string, pic:string, followers:number){
        this.name = name;
        this.profPic = profPic;
        this.bio = bio;
        this.pic = pic;
        this.followers = followers;
        
    }
}

