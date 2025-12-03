<?php
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://motion.zoyd.space/webhook/test_project/website",
        CURLOPT_POSTFIELDS => [
            "имя"=>trim($_POST["name"]),
            "телефон"=>trim($_POST["phone"]),
            ///"Email"=>trim($_POST["email"]),
            'utm_source'=>$_POST["utm_source"],
            'utm_medium'=>$_POST["utm_medium"],
            'utm_campaign'=>$_POST["utm_campaign"],
            'utm_term'=>$_POST["utm_term"],
            'utm_content'=>$_POST["utm_content"],
        ],
    ]);
    $result = curl_exec($curl);
    print_r($result);
    curl_close($curl);
    
    return 1;