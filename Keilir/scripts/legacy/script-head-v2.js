function stripTags(s, n) {
    return s.replace(/<.*?>/ig, "").split(/\s+/).slice(0, n - 1).join(" ")
}

 function rm(a) {
     var p = document.getElementById(a);
     imgtag = "";
     ifrtag = "";
     ifrsrc = "";
     ifrtb = -1;
     img = p.getElementsByTagName("img");
     ifr = p.getElementsByTagName("iframe");
     for (var i = 0; i < ifr.length; i++) {
         ifrsrc = ifr[i].src;
         if (ifrsrc.indexOf("//www.youtube.com/embed/") != -1) {
             ifrtb = i;
             break
         }
     }
     if (ifrtb != -1) ifrtag = '<div class="entry-video"><iframe width="840" height="472" src="' + ifrsrc + '?vq=medium&rel=0" frameborder="0" allowfullscreen></iframe></div>';
     else if (img.length >= 1) imgtag = '<div class="entry-image"><a href="' + y + '"><img class="thumb" src="' + img[0].src + '" /></a></div>';
     else imgtag = '<div class="entry-image no-image"><a href="' + y + '"><img class="thumb" src="https://lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg" /></a></div>';
     p.innerHTML = ifrtag + imgtag + '<div class="entry-container"><div class="entry-content"><h1 class="entry-title"><a href="' + y + '">' + x + "</a></h1><p>" + stripTags(p.innerHTML, 60) + "...</p></div></div>"
 }

function av(a) {
    var b = a.entry.author[0];
    c = b.name.$t;
    d = b.gd$image.src.replace(/\/s[0-9]+(-*c*)\//, "/s55$1/");
    document.write('<img alt="' + c + '" class="avatar-author" src="' + d + '" title="' + c + '"/>')
};
