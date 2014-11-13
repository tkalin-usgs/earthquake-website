<?php
if (!isset($TEMPLATE)) {
  //include_once '../conf/config.inc.php';
  $TITLE = 'Earthquakes';
  $HEAD = '
  <link rel="stylesheet" href="../index.css"/>';
  //<link rel="stylesheet" href="/css/flexible-grid.css"/>;
  //<link rel="stylesheet" href="/css/imagelist.css"/>';
  $FOOT = "<script>
(function () {
  require.config({
    baseUrl: '/'
  });

  require([
    'eqlist/EqList'
  ], function (
    EqList
  ) {
    new EqList(document.getElementById('significant-earthquakes'));
    new EqList(document.getElementById('m2pastDay-earthquakes'),
      'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojsonp');
  });
})();
</script>";
  include 'classes/ImageList.class.php';
  include 'template.inc.php';
}

// $SCRIPTS = 'js/home.js';
// $SCRIPTS .=',js/require.js';
?>

<div class = "row">
  <div class="column one-of-three">
    <h2 class="h3">
       <a href="/earthquakes/map/#%7B%22feed%22%3A%2230day_sig%22%2C%22search%22%3Anull%2C%22sort%22%3A%22newest%22%2C%22basemap%22%3A%22grayscale%22%2C%22autoUpdate%22%3Atrue%2C%22restrictListToMap%22%3Atrue%2C%22timeZone%22%3A%22local%22%2C%22mapposition%22%3Anull%2C%22overlays%22%3A%7B%22plates%22%3Atrue%7D%2C%22viewModes%22%3A%7B%22map%22%3Atrue%2C%22list%22%3Atrue%2C%22settings%22%3Atrue%2C%22help%22%3Afalse%7D%7D">
        Significant Earthquakes
        <span class="subtext">Past 30 Days</span>
      </a>
    </h2>
    <div id="significant-earthquakes" class="height_scroll"></div>
  </div>

  <div class="column one-of-three">
    <h2 class="h3">Today&rsquo;s Earthquake Fact</h2>
    <div>
      Thousands of earthquakes occur every day around the world, although most are so small they can only be detected by sensitive seismographs. As more and more seismographs are installed, more earthquakes can be and have been located. However, the number of large earthquakes (magnitude 6.0 and greater) that occur each year has stayed relatively constant.
    </div>
    <h2>Today in Earthquake History</h2>
    <img src="/images/calendar.jpg" width="64" height="41" alt="calendar
    icon" class="left" />
    <p><strong>November 12, 1999</strong>
      M 7.2, Turkey – At least 894 people killed and 4,948 injured, mostly in the Bolu-Duzce area. Casualties occurred as far as Eskisehir, Yalova and Zonguldak. Extensive…
    <a style="font-size:.9em;" href="/learn/today/">Read More</a>
    </p>
  </div>

  <div class="column one-of-three">
    <h2 class="h3">
      <a href="/earthquakes/map/#%7B%22feed%22%3A%221day_m25%22%2C%22search%22%3Anull%2C%22sort%22%3A%22newest%22%2C%22basemap%22%3A%22grayscale%22%2C%22autoUpdate%22%3Atrue%2C%22restrictListToMap%22%3Atrue%2C%22timeZone%22%3A%22local%22%2C%22mapposition%22%3Anull%2C%22overlays%22%3A%7B%22plates%22%3Atrue%7D%2C%22viewModes%22%3A%7B%22map%22%3Atrue%2C%22list%22%3Atrue%2C%22settings%22%3Atrue%2C%22help%22%3Afalse%7D%7D">Magnitude 2.5+ Earthquakes
        <span class="subtext">Past Day</span>
      </a>
    </h2>
    <div id="m2pastDay-earthquakes" class="height_scroll"></div>
  </div>
</div>

<h2>Real-time &amp; Historical Earthquake Information</h2>
<div class = "row">
  <div class="one-of-three column">
<?php
$list = new ImageList();

$list->addItem(
  '/earthquakes/map/',
  '../images/earthquakes.gif',
  'Latest Earthquakes',
  'View recent events or search for past earthquakes.');

$list->addItem(
  '/earthquakes/feed/',
  '../images/feeds.gif',
  'Real-time Feeds &amp; Notifications',
  'Get real&#45;time earthquake notifications sent to you using a number of
            popular mediums: Feeds, Email, Twitter etc. &hellip;'
  );

$list->addItem(
  '/earthquakes/search/',
  '../images/search.gif',
  'Search Earthquake Archives',
  'Online catalog search.'
  );

$list->display();
?>
    <p><a href="/earthquakes/eqinthenews/">Significant Earthquake Archive</a></p>
    <p><a href="errata.php">Errata for Latest Earthquakes</a></p>
  </div>

  <div class="one-of-three column">
<?php
$list = new ImageList();

$list->addItem(
  '/earthquakes/region.php',
  '../images/infobyregion.gif',
  'Info by Region',
  'By state or by country.');

$list->addItem(
  '/earthquakes/states/seismicity/',
  '../images/seis_us.png',
  'US Seismicity Map',
  'Entire US and regional maps.');

$list->addItem(
  '/earthquakes/world/seismicity_maps/',
  '../images/seis_world.png',
  'World Seismicity Maps',
  'Entire world and regional maps.');

$list->addItem(
  '/earthquakes/eqarchives/',
  '../images/top10.gif',
  'Earthquake &ldquo;Top 10&rdquo; Lists &amp; Maps',
  'Earthquake lists, maps, and statistics.');

$list->display();
?>

  </div>

  <div class="one-of-three column">
<?php
$list = new ImageList();

$list->addItem(
  '/earthquakes/dyfi/',
  '../images/dyfi.png',
  'Did You Feel It?',
  'Feel an earthquake? Report it here.');

$list->addItem(
  '/earthquakes/shakemap/',
  '../images/shakemap.png',
  'ShakeMap',
  'Earthquake shaking maps and data.');

$list->addItem(
  '/earthquakes/pager/',
  '../images/pager.png',
  'PAGER',
  'Estimates of earthquake impacts, monetary and human losses.');

$list->display();
?>

  </div>
</div>

<!-- SCRIPT FOR SIGNIFICANT EQ LIST -->

