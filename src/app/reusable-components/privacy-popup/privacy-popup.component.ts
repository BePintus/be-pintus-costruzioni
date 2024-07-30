import { AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy-popup',
  templateUrl: './privacy-popup.component.html',
  styleUrls: ['./privacy-popup.component.scss']
})
export default class PrivacyPopupComponent implements AfterViewInit {

  @Input() policyVersion!: string;

  @ViewChild('content') contentTemplate!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngAfterViewInit() {    console.log(this.contentTemplate)
    this.open(this.contentTemplate)
  }

  open(content: TemplateRef<any>) {
    console.log(this.contentTemplate)

		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			() => {
			},
			() => {
        localStorage.setItem('visited', JSON.stringify(true));
        localStorage.setItem('privacyPolicyVersion',this.policyVersion);
			},
		);
	}

}
