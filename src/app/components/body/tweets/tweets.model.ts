export class Tweet{
    public profPic!:string;
    public profName!:string;
    public bio!:string;
    public imagePath!:string;
    public comments!:number;
    public retweets!:number;
    public saved!:number;


    constructor(pic:string, name:string, bio:string, imgPath:string, comments:number, retweets:number, saved:number){
        this.profPic = pic;
        this.profName = name;
        this.bio = bio;
        this.imagePath = imgPath;
        this.comments = comments;
        this.retweets = retweets;
        this.saved = saved;
    }
}

