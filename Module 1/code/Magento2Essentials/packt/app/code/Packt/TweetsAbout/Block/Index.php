<?php

  namespace Packt\TweetsAbout\Block;

  class Index extends \Magento\Framework\View\Element\Template{

      public function getMagentoUrl(){
          return $this->getData('urlMagento');
      }

      public function getPHPUrl(){
          return $this->getData('urlPHP');
      }

      public function getPacktUrl(){
          return $this->getData('urlPackt');
      }
  }
