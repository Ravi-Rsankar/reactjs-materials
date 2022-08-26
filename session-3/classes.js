class students{
    constructor(name,standard,subject,medal){
        this.name=name
        this.standar=standard
        this.subject=subject
        this.medal=medal
    }
    exams(){
        return `standard:${this.standar}th  my name is ${this.name} and my subject is ${this.subject}`
    }
    achievments(){
        return `sports-${this.medal}`
    }
}

class exstudents extends students{
    constructor(name,standard,subject,medal,topper){
        super(name,standard,subject,medal)
        this.topper=topper
    }
    
    toppers(){
        if(this.topper=='topper'){
            return 'topper'
        }
        else{
            return 'average'
        }
    }
    
}
ui=new students('ravi',10,'english','gold')
console.log(ui.exams())
console.log(ui.achievments())
kl=new exstudents('ravi',10,'english','gold','topper')
console.log(kl.toppers())

