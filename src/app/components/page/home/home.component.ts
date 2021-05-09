import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { PostI } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts:{
    id:string;
    titlePost:string;
    contentPost:string;
    imagePost:string;
  }[]=[
    {
      id:'1',
      titlePost:'Akai Haato',
      contentPost:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost:'https://static.miraheze.org/hololivewiki/thumb/d/da/Akai_Haato_-_Portrait_01.png/290px-Akai_Haato_-_Portrait_01.png'


    },
    {
      id:'2',
      titlePost:'Houshou Marine',
      contentPost:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost:'https://static.miraheze.org/hololivewiki/thumb/c/cb/Houshou_Marine_-_Portrait_01.png/290px-Houshou_Marine_-_Portrait_01.png'
    }
];




posts$!: Observable<PostI[]>;

  constructor(private postSvc:PostService) { }

  ngOnInit(): void {
    //  this.postSvc.getAllPosts().subscribe(res=>console.log('POSTS',res));
    this.posts$ =this.postSvc.getAllPosts();
  }

}
