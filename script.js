let imageArr=[
    "https://img.freepik.com/premium-photo/creative-pizza-banner-design-with-top-view-perspective-3d-illustration-realistic-pizza-banner-ad_667286-105.jpg?size=626&ext=jpg&ga=GA1.1.1924478754.1694245219&semt=ais",

    "https://img.freepik.com/free-psd/fast-food-restaurant-banner-template_23-2148987498.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais",

    "https://img.freepik.com/free-vector/colorful-background-with-prepared-pizza_1284-9275.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais",

    "https://img.freepik.com/free-vector/italian-chef-hot-pizza-illustration_1308-2306.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais",

    "https://img.freepik.com/premium-photo/pizza-is-sitting-wooden-counter-front-brick-fire_875722-19337.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais",

    "https://img.freepik.com/free-vector/pizza-restaurant-template-design_23-2150307382.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais",

    "https://img.freepik.com/free-vector/pizza-restaurant-template-design_23-2150307382.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais",

    " https://img.freepik.com/premium-photo/pizza-with-slice-being-lifted-up-word-pizza-it_779834-3140.jpg?size=626&ext=jpg&ga=GA1.2.1924478754.1694245219&semt=ais"

    
    ];
    

    let image=document.querySelector("#poster");
    let prev=document.getElementById("prev");
    let next=document.getElementById("next");
    let currentImg=0;
    image.setAttribute("src",imageArr[currentImg]);

    prev.addEventListener("click",function(){
        currentImg--
        image.setAttribute("src",imageArr[currentImg]);
    })

    next.addEventListener("click",function(){
        currentImg++
        image.setAttribute("src",imageArr[currentImg]);
    })
