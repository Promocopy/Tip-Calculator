function checkgrade(score)
{
    if (score>=70 && score<=100){
        console.log("A");
    }
    else if (score>=60 && score<=69)
    {
        console.log("B");
    }
    else if (score>=50 && score<=59)
    {
        console.log("C");
    }
    else if (score>=45 && score<=49)
    {
        console.log("D");
    }
    else if (score>=40 && score<=44)
    {
        console.log("E");
    }
    else if (score >=0 && score <= 40)
    {
        console.log("F");
    }
    else (score >= 100 && score <= 0)
    {
        console.log("invalid score")
    }
}//turn it into tenary operator

checkgrade(101)