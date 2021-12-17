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
/*
 *
 * Custom CSS for Sabernova written by Sangeeth Sudheer
 * 2 Jan 2015
 *
 */
$(document).ready(function($) {
    (function() {
        // Checking whether Ad units were removed by any Ad-blockers.
        if(($('#AdSense1').length == 0) && ($('#AdSense2').length == 0) || ($('#AdSense1').height() == 0) && ($('#AdSense2').height() == 0)) {
            var $adblockPopup = $('<div id="adblockinfo-container"></div>');
            var $adblockContent = $('<div id="adblockinfo-content"></div>');
            var $content = $(
            	'<p>Hi,</p><p>We see that you are using some sort of an Ad-blocker. Hey, we\'re totally okay with that and we understand that people like you get annoyed seeing them flashing over at the sides. But we would like you to know the reason why they\'re there.</p><p>Ads are the reason why you see our Site still up and running. They generate a small income everytime you view our page and when you interact with them. A part of the actual income goes to the Ad provider and a small share goes to us. It is this money that keeps this website up.</p><p>But why do we need this money? Well, the web is like a virtual world. Just like how you pay to get the land to build a house and how you keep paying the government the taxes and the land values, you have to pay to get space on the internet to build a website.</p><p>But buying space in the web is a costly affair for a blog like Sabernova. Instead, we rely on Blogger to provide the space to host our articles and images with limitations on design and accessiblity. But we still have to pay to keep our domain name which is the address of our website (www.sabernova.com).</p><p>So, if you have any second thoughts on the whole Ad-blocker thingy, we would appreciate it for it will keep us running. But if you don\'t, then no pressure. It\'s your choice after all.</p>'
            );
            var $adblockClose = $('<a id="adblockinfo-close">Whatever. Let me see the site.</a>');
            $adblockContent.append($content).append($adblockClose);
            $('body').append($adblockPopup);
            $adblockPopup.append($adblockContent);
            $('head').append('<link href="https://docs.google.com/uc?export=download&id=0B14np4ACFR7pSEFtQl9BMWV3cUU" rel="stylesheet" type="text/css" />');
            $adblockClose.click(function() {
            	$adblockContent.fadeOut("slow", function() {
                    $adblockPopup.fadeOut("fast", function() {
                        $adblockPopup.remove();
                    });
            	});
                return false;
            });
        }
        // Updating copyright information with the current year
        (function() {
            var year = (new Date()).getFullYear();
            $('#current-year').text(year);
        }());
        // Loading custom CSS for the About page
        (function() {
            var pageURL = location.href;
            if(pageURL.indexOf('/p/about.html') != -1) {
                $('#main .dateDisqus, .post .entry-meta .author-meta, #comments, .entry-content div[class ^= "vl-sp-"]').remove();
                $('head').append('<link rel="stylesheet" type="text/css" href="https://docs.google.com/uc?export=download&id=0B14np4ACFR7pYnRMZV9HSDQyQUE" />');
            }
        }());
        // Adding anchors to about me page when Author's name is clicked
        (function(){
           var a = $('.author-meta h4 > a');
           var url = a.attr('href');
           var authorName = a.text().replace(/\s/g,'');
           a.attr('href', url + '#' + authorName);
        }());
    }());
});