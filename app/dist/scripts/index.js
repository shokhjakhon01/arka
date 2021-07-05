"use strict";var ulList=document.querySelector(".header__nav-list"),ulLink=document.querySelectorAll(".header__nav-list-link"),ulImg=document.querySelectorAll(".header__nav-list-link"),headerRight=document.querySelector(".header__right"),rightLink=document.querySelector(".header__right-link"),rightIcon=document.querySelector(".header__right-icon"),openButton=document.querySelector(".header__right-open"),closeButton=document.querySelector(".close__button");openButton.addEventListener("click",function(){ulList.style.transform="translate(0%)",rightLink.style.display="block",rightIcon.style.display="block",ulList.appendChild(rightLink),ulList.appendChild(rightIcon)}),closeButton.addEventListener("click",function(){ulList.style.transform="translate(100%)"});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbInVsTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVsTGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bEltZyIsImhlYWRlclJpZ2h0IiwicmlnaHRMaW5rIiwicmlnaHRJY29uIiwib3BlbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiZ0JBQU1BLENBQUFBLE1BQU0sQ0FBb0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQyxDQUMxQkMsTUFBTSxDQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLHdCQUExQixDLENBQ1RDLEtBQUssQ0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQix3QkFBMUIsQyxDQUNSRSxXQUFXLENBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQyxDQUNkSyxTQUFTLENBQW1CTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLEMsQ0FDNUJNLFNBQVMsQ0FBcUJQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQyxDQUM5Qk8sVUFBVSxDQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLEMsQ0FDYlEsV0FBVyxDQUFFVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEMsQ0FFbkJPLFVBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEIsT0FBNUIsQ0FBb0MsVUFBQSxDQUNsQ1gsTUFBTSxDQUFDWSxLQUFQLENBQWFDLFNBQWIsQ0FBeUIsZUFEUyxDQUVsQ04sU0FBUyxDQUFDSyxLQUFWLENBQWdCRSxPQUFoQixDQUEwQixPQUZRLENBR2xDTixTQUFTLENBQUNJLEtBQVYsQ0FBZ0JFLE9BQWhCLENBQTBCLE9BSFEsQ0FJbENkLE1BQU0sQ0FBQ2UsV0FBUCxDQUFtQlIsU0FBbkIsQ0FKa0MsQ0FLbENQLE1BQU0sQ0FBQ2UsV0FBUCxDQUFtQlAsU0FBbkIsQ0FDRCxDQU5ELEMsQ0FRQUUsV0FBVyxDQUFDQyxnQkFBWixDQUE2QixPQUE3QixDQUFzQyxVQUFBLENBQ3BDWCxNQUFNLENBQUNZLEtBQVAsQ0FBYUMsU0FBYixDQUF5QixpQkFDMUIsQ0FGRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdWxMaXN0OkhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGlzdCcpXHJcbmNvbnN0IHVsTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saXN0LWxpbmsnKVxyXG5jb25zdCB1bEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saXN0LWxpbmsnKVxyXG5jb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JpZ2h0JylcclxuY29uc3QgcmlnaHRMaW5rOkhUTUxMaW5rRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JpZ2h0LWxpbmsnKVxyXG5jb25zdCByaWdodEljb246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19yaWdodC1pY29uJylcclxuY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JpZ2h0LW9wZW4nKVxyXG5jb25zdCBjbG9zZUJ1dHRvbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlX19idXR0b24nKVxyXG5cclxub3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICB1bExpc3Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwJSknXHJcbiAgcmlnaHRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgcmlnaHRJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgdWxMaXN0LmFwcGVuZENoaWxkKHJpZ2h0TGluaylcclxuICB1bExpc3QuYXBwZW5kQ2hpbGQocmlnaHRJY29uKVxyXG59KVxyXG5cclxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIHVsTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDEwMCUpJ1xyXG59KVxyXG4iXX0=
