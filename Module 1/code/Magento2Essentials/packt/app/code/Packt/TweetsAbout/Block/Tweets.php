<?php
  namespace Packt\TweetsAbout\Block;

  require $_SERVER['DOCUMENT_ROOT'] . "/packt/app/code/Packt/TweetsAbout/Api/vendor/autoload.php";
  use Abraham\TwitterOAuth\TwitterOAuth;

  class Tweets extends \Magento\Framework\View\Element\Template{

      private $consumerKey;
      private $consumerSecret;
      private $accessToken;
      private $accessTokenSecret;

    public function searchTweets(){
      $connection = $this->twitterDevAuth();
      $result = $connection->get("search/tweets", array("q" =>$this->getData('hashtag'), "result_type"=>"recent", "count" => 10));

      return $result->statuses;
    }

    private function twitterDevAuth(){
      $this->consumerKey        = "3X97cq0DldQem5nPnsB7323kb";
      $this->consumerSecret     = "OuktxxpMspe57eXjjg6m182nkabdEMQU9hMk7RJIZ42qzBVBql";
      $this->accessToken        = "56157689-hj1ooZ0410ME1IGc1ZZ654a15afXEaZQpT1M7bBEK";
      $this->accessTokenSecret  = "M1rjnxyVsUCte7EFPYqLemrZZSKpbtUxbxxGECgFhGndv";

      return new TwitterOAuth($this->consumerKey, $this->consumerSecret, $this->accessToken, $this->accessTokenSecret);
    }
  }
