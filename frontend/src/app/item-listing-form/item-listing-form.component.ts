import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-listing-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-listing-form.component.html',
  styleUrl: './item-listing-form.component.css',
})
export class ItemListingFormComponent {
  selectedFiles: File[] = [];
  file: File[] = [];
  fileNameDisplay = '';
  itemName = '';
  itemDesc = '';

  /**
   * Makes array of selected files
   * @param event
   */
  onFileSelected(event: any): void {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files);
      const inputElement = event.target as HTMLInputElement;

      if (this.fileNameDisplay && inputElement.files) {
        const files = Array.from(inputElement.files);
        this.fileNameDisplay =
          files.length > 0
            ? files.map((f: File) => f.name).join(', ')
            : 'No file chosen';
      }
    }
  }

  /**
   * Uploads item listing to backend
   */
  uploadItemListing(): void {
    if (this.selectedFiles.length == 0) {
      alert('Please select at least one image.');
    }
    const formData = new FormData();

    formData.append('name', this.itemName);
    formData.append('desc', this.itemDesc);
    this.selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    console.log(formData);

    // Call API
  }
}
