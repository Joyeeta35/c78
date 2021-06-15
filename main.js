            var images = ["https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg", "https://i.pinimg.com/564x/cb/c8/f2/cbc8f23f0ec183769e552002bf8b5a6e.jpg", "https://cdn.recolor.com/u/iQFViYqdTJbRpSZPIXCf9nCwYLK2/p/LrRlpPjiCDuY", "https://i.pinimg.com/564x/f5/64/ef/f564ef7d43a84d98f49054460b127c4a.jpg"];
       var names = ["Family Book", "Rana/My Dad", "Joyeeta/Me", "Pranty/My Mom"];
       var i = 0;
       function update(){
           i++;
           var numbers_of_family_member_in_array = 3;
           if(i > numbers_of_family_member_in_array)
           {
               i = 0;
           }
           var updatedImage = images[i];
           var updatedName = names[i];
           document.getElementById("family_member_image").src = updatedImage;
           document.getElementById("family_member_name").innerHTML = updatedName;
        }