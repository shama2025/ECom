import { Component } from '@angular/core';

@Component({
  selector: 'app-item-listing-form',
  standalone: true,
  imports: [],
  templateUrl: './item-listing-form.component.html',
  styleUrl: './item-listing-form.component.css',
})
export class ItemListingFormComponent {
  selectedFiles: File[] = [];

  /**
   * Makes array of selected files
   * @param event
   */
  onFileSelected(event: any): void {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files);
      const fileNameDisplay = document.getElementById(
        'fileNameDisplay',
      ) as HTMLElement | null;
      const inputElement = event.target as HTMLInputElement;

      if (fileNameDisplay && inputElement.files) {
        const files = Array.from(inputElement.files);
        fileNameDisplay.textContent =
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
    const itemName = document.getElementById('itemName') as HTMLInputElement;
    const itemDesc = document.getElementById('longDesc') as HTMLInputElement;
    formData.append('name', itemName.value);
    formData.append('desc', itemDesc.value);
    this.selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    console.log(formData);

    // Call API
  }
}
