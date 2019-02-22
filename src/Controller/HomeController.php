<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @return Response
     * @Route("/")
     */
    public function show(): Response
    {
        return $this->render('@app/homepage/homepage.html.twig');
    }
}