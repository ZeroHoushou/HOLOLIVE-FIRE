import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postSvc:PostService) { }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl ('', Validators.required),
    imagePost: new FormControl ('',Validators.required)
  });

  ngOnInit(): void {
  }

  addNewPost(data: PostI){
    console.log('New Post', data);

  }
}
