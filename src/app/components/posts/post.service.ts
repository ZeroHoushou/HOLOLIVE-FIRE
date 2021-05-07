import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostI } from '../../shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // posts: Observable<PostI[]>;
  private postsCollection:AngularFirestoreCollection<PostI>;
  constructor(private afs: AngularFirestore) {
    this.postsCollection =afs.collection<PostI>('posts');
    this.getAllPosts();
  }

  public getAllPosts(): Observable<PostI[]> {
    return this.afs
      .collection('posts')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => a.payload.doc.data() as PostI
          //   {
          //   const data = a.payload.doc.data() as PostI;
          //   const id = a.payload.doc.id;
          //   return { id, ...data };
          // }
          )
        )
      );
  }
}
