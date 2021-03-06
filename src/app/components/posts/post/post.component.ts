import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post:{
    id:string;
    titlePost:string;
    contentPost:string;
    imagePost:string;
  }=
    {
      id:'1',
      titlePost:'PostOne',
      contentPost:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost:'https://picsum.photos/id/237/200/300'


    };


  public post$!:Observable<PostI>;
  constructor(private route: ActivatedRoute, private  postSvc:PostService) { }

  ngOnInit(): void {
    // this.post.id= this.route.snapshot.params.id;
    const idPost = this.route.snapshot.params.id;
    this.post$=this.postSvc.getOnePost(idPost);
  }

}
