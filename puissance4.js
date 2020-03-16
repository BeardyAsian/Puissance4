$(document).ready(function() 
{
  $(function($) 
  {
    $.fn.puissance4 = function(y, x, gamer1, gamer2, clr_1, clr_2) 
    {
      function checkParameter() 
      {
        if (!Number.isInteger(x)) 
        {
          alert("Veuillez utilisez des chiffres pour la taille et la largeur")
        }
        if (!Number.isInteger(y)) 
        {
          alert("Veuillez utilisez des chiffres pour la taille et la largeur")
        }
        if (!Number.isInteger(x) && !Number.isInteger(y)) 
        {
          alert("Veuillez utilisez des chiffres pour la taille et la largeur")
        }
        else if (y < 4 && x < 4) 
        {
          alert("Veuillez augmenter la hauteur et la largeur");
          return false;
        }
        else if (y > 10 && x > 10) 
        {
          alert("Veuillez diminuer la hauteur et la largeur");
          return false;
        }        
        else if(clr_2 === clr_1) 
        {
          alert("Veuillez choisir des couleurs differentes");
          return false;
        }
        else if(y <= 4) 
        {
          alert("Veuillez augmenter la hauteur");
          return false;
        }
        else if(y > 10) 
        {
          alert("Veuillez diminuer la hauteur");
          return false;
        }
        else if (x <= 4) 
        {
          alert("Veuillez augmenter la largeur");
          return false;
        }
        else if(x > 10) 
        {
          alert("Veuillez augmenter la hauteur");
          return false;
        }
        else 
        {
          createBoard();
        }
      }
      checkParameter();

      function createBoard() 
      {
        $("header").append(back);
        $("button").css({"cursor": "pointer", "text-align": "center", "padding": "12px 20px", "font-size": "24px", "margin": "auto auto", "font-weight": "bold", "color": "white", "background-color": "transparent"});

        for (let i = 0; i < y; i++) 
        {
          $("table").append("<tr id='" + i + "tr'></tr>");
          for (let j = 0; j < x; j++) 
          {
            let td = $("<td></td>").attr("data-position", i + "-" + j);
            $("#" + i + "tr").append(td);
            td.css({"cursor": "pointer", "display": "inline-block", "width": "60px", "height": "60px", "margin": "5px", "background-color": "#ffffff"});
          }
        }
      }

      $(".replay").on("click", function(e) 
      {
        playing = false;
        $("span").fadeOut(400, function() 
        {
          $("span").remove();
        });
        $("td").removeClass("active");
          setTimeout(function(){ playing = true; }, 1000);
      });

      $(".back").on("click", function(e) 
      {
        if($(cur).parent().length === 0) 
        {
          return;
        }
        if (playing) 
        {
          $(cur).parent().removeClass();
          $(cur).remove();
          let color = (stat) ? clr_2 : clr_1;
          $("div").css("background-color", color);
          thisGamer = (stat) ? gamer2 : gamer1;
          $(".playername").text(text + thisGamer);
          stat = !stat;
        }
      });

      $("td").on("click", function() 
      {
        if (playing) 
        {
          playCell($(this), y, x);
        }
      });

      function playCell(that, y, x) 
      {
        let index = that.data("position").split("-");
        let posy = index[0];
        let posx = index[1];
        console.log(posx);
        console.log(posy);
        for (let countY = y; countY >= 0; countY--) 
        {
          cur =  $("[data-position='"+ (countY - 1) +"-"+ posx +"']");
          let curclass = cur.attr("class");
          if(curclass != "active") 
          {
            let color = (stat) ? clr_1 : clr_2;
            let cellsize = $(".cell").length;
            if (countY === 0) 
            {
              return; 
            }
            cur.addClass("active").append("<span class='cell'></span>");
            $("span").css({"display": "block", "width": "100%", "height": "100%"});
            cur.find("span").animate({marginTop: 0},"slow").css("background-color", color);
            stat = !stat;
            $("div").css("background-color", color = (stat) ? clr_1 : clr_2);
            thisGamer = (stat) ? gamer1 : gamer2;
            $(".playername").text(text + thisGamer);
            stat = !stat;
            checkForWin(y, x ,countY, posx, posy);
            stat = !stat;
            if (cellCount === (cellsize +1)) 
            {
              alert("Match Nul");
              playing = !playing;
              return;
            }
            return;
          }
        }
      }
      function win() 
      {
        thisGamer = (stat) ? gamer1 : gamer2;
        alert(thisGamer + "Gagne")
        if (thisGamer === gamer1)
        {
          count1++
          $("." + thisGamer).text(thisGamer + " " + count1);
        }
        else if(thisGamer === gamer2{

          count2++
          $("." + thisGamer).text(thisGamer + " " + count2);
        }
        }
        function remove() 
        {
          $(".alert").remove();
        }setTimeout(remove, 2300);
      }
  };
}(jQuery))

$(function() {
    $("window").puissance4(6, 7, "Test1", "Test2", "red", "yellow");
});
});
