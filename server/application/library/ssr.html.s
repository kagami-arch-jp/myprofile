<?js setResponseHeaders({'content-type': 'text/html; charset=utf8'}) ?>
<!doctype html>
<html>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5SF2QTHZ');</script>
<!-- End Google Tag Manager -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N3SG49LF6C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N3SG49LF6C');
</script>
<?js if(__IS_DEV__) { ?>
<base href='http://127.0.0.1:3000' />
<?js } ?>
  <link rel="icon" href="data:,">
  <base target='_blank' />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no,maximum-scale=1.0,viewport-fit=cover" />
  <meta charset=utf8 />
  <?js for(let css_link of css) { ?>
    <link href='<?js echo(css_link) ?>' crossorigin='anonymous' rel='stylesheet' type='text/css' />
  <?js } ?>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SF2QTHZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  <div class='app'>$${{ssrHTML}}</div>
  <script type='text/javascript'>
    window.__ssrData__=<?js echo(ssrData) ?>;
  </script>
  <?js for(let js_link of js) { ?>
    <script type='text/javascript' src='<?js echo(js_link) ?>'></script>
  <?js } ?>
</body>
</html>

<?js
echo(readEchoed().replace(/\s*[\n\r]+\s*|^\s*/g, '').replace('$${{ssrHTML}}', ssrHTML))
