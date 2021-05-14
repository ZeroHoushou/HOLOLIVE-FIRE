import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostI } from '../../shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private postsCollection:AngularFirestoreCollection<PostI>;

  constructor(private readonly afs: AngularFirestore) {
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

}
