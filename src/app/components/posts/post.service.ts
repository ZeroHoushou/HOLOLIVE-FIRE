import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, pipe } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileI } from 'src/app/shared/models/file.interface';
import { PostI } from '../../shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private postsCollection:AngularFirestoreCollection<PostI>;
  private filePath:any;
  private downloadURL!: Observable<string>;

  constructor(private readonly afs: AngularFirestore, private storage:AngularFireStorage) {
    this.postsCollection = afs.collection<PostI>('posts');
    this.getAllPosts();
  }

  // public getAllPosts(): Observable<PostI[]> {
  //   return this.afs
  //     .collection('posts')
  //     .snapshotChanges()
  //     .pipe(
  //       map(actions =>
  //         actions.map(a => a.payload.doc.data() as PostI
  //
  //         )
  //       )
  //     );
  // }


  public getAllPosts(): Observable<PostI[]> {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PostI;
            const id = a.payload.doc.id; //obetner el id de la coleccion (regularmente se generan aleatoriamente)
            return { id, ...data };
          })
        )
      );
  }

  // public getAllPosts(): void {
  //   this.posts=this.postsCollection.snapshotChanges().pipe(
  //     map(actions =>actions.map(a=>a.payload.doc.data() as PostI))
  //   );

  // }


  public getOnePost(id:PostI):Observable<PostI>{
    return this.afs.doc<any>(`posts/${id}`).valueChanges();
  }


  public deletePostById (post: PostI)
  {
    return this.postsCollection.doc(post.id).delete();
  }


  public editPostById (post:PostI, newImage?:FileI){
    if(newImage)
    {
    return  this.uploadImage(post, newImage);
    }
    else{
      return  this.postsCollection.doc(post.id).update(post);
    }


  }


  public preAddAndUpdatePost(post: PostI , image:FileI):void{
    this.uploadImage(post,image);
  }

  private savePost(post:PostI){
    console.log('PostSvc');
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost
    };
    if (post.id) {
      return this.postsCollection.doc(post.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }
  }

  private uploadImage(post:PostI , image:FileI){
      this.filePath = `images/${image.name}`;
      const fileRef = this.storage.ref(this.filePath);
      const task = this.storage.upload(this.filePath, image);
      task.snapshotChanges()
      .pipe(
        finalize(()=>{
            fileRef.getDownloadURL().subscribe(urlImage =>{
            this.downloadURL = urlImage;
            this.savePost(post);
          });
        })
      ).subscribe();
  }

}
