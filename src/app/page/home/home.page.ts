import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild("map")
  mapRef!: ElementRef;
  map!: GoogleMap;
  

  mensaje : string = "";
  constructor(private rutaActiva : ActivatedRoute, private storage: Storage, private modalCtrl: ModalController) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['rutUsuario'])
      {
        this.mensaje = params['rutUsuario'];
      }

    });
  }


  ionViewDidEnter() {
    this.createMap();
  }
  ngOnInit() {
  }

  async verStorage()
  {
    let nombre = await this.storage.get("nombreUsuario");
    console.log(" El nombre guardado es: "+nombre);
    
  }
  
  async createMap(){
    this.map = await GoogleMap.create({ 
      id: 'mi-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: { lat: -33.53170, lng: -70.65100 },
        zoom: 10,
        },
      });
      this.addMarkers();
  }
  
  
  async addMarkers(){
    const markers: Marker[] = [
      
      {
        coordinate: {
          lat: -33.53170,
          lng: -70.65100,
        },
        title: 'ArDetailing',
        snippet: 'Chile',
      },
      {
        coordinate: {
          lat: -33.54943,
          lng: -70.56969,
        },
        title: 'Sucursal 2 ArDetailing',
        snippet: 'Chile',
      }
    ];
    await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker) => {
      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });


  }
}