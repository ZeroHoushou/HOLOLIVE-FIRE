import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostService } from '../../../components/posts/post.service';
import { PostI } from '../../models/post.interface';
import  Swal  from 'sweetalert2';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit ,AfterViewInit {
  displayedColumns: string[] = ['titlePost', 'tagsPost','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator,{static:true}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort !: MatSort;
  constructor( private postSvc:PostService) { }

  ngOnInit(): void {
    this.postSvc.getAllPosts().subscribe(posts=> (this.dataSource.data = posts));
  }
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEditPost(post:PostI){
    console.log("edit",post);
  }
  onDeletePost(post:PostI){
    console.log("delete",post);
    Swal.fire({
      title:'Are you sure?',
      text:'You won´t be able to revert this!',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Yes,delete it!'

    }).then(resutl=>{
      if(resutl.value){
        console.log('Delete');
        Swal.fire('Deleted!','Your post has been deleted','success');
      }
    })
  }

  onNewPost(){
    console.log("new");
  }
}
