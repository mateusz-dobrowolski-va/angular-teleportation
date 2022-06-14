import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NativeTeleportService {
  teleport(contentId: string, portalOutletId: string): void {
    const content = document.querySelector(`#${contentId}`);

    if (content) {
      document.querySelector(`#${portalOutletId}`)?.appendChild(content);
    }
  }

  finishTeleportation(contentId: string, portalOutletId: string): void {
    const content = document.querySelector(`#${contentId}`);

    if (content) {
      document.querySelector(`#${portalOutletId}`)?.removeChild(content);
    }
  }
}
