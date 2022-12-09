const str = 
`First of all, who knows if this will even work, right?

By all accounts, it will surely be a
[url=http://zoomquilt.org]this cool website[/url].

But what if html is up in here?`;

console.log(str.replace(/\[url=([^\]]+)\](.*?)\[\/url\]/gi, "<a href=\"$1\">$2</a>"));
