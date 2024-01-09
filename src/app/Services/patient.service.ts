import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../Models/patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8080/api';

  addPatient(newPatient:Patient): Observable<any> {
    const url = this.baseUrl + '/save';
    return this.http.post(url, newPatient);
  }
}
