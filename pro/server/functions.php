<?php
function getCats()
{
    global $con;
    require "db_connection.php";
    $getCatQurey="select * from categories";
    $getCatResult=mysqli_query($con,$getCatQurey);
    while($row=mysqli_fetch_assoc($getCatResult))
    {
        $id=$row['cat_id'];
        $title=$row['cat_title'];
        echo "<li><a class='nav-link'  href=''#'>$title</a></li>";
    }

}
function getBrand()
{
    global $con;
    require "db_connection.php";
    $getBrandQurey="select * from brand";
    $getBrandResult=mysqli_query($con,$getBrandQurey);
    while($row=mysqli_fetch_assoc($getBrandResult))
    {
        $id=$row['brand_id'];
        $title=$row['brand_title'];
        echo "<li><a class='nav-link'  href=''#'>$title</a></li>";
    }

}