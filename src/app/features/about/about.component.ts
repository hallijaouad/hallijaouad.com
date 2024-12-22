import {Component} from '@angular/core';
import {SectionContainerComponent} from '../../shared/components/section-container/section-container.component';
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {SkillBadgeComponent} from '../../shared/components/skill-badge/skill-badge.component';
import {Data} from "../../core/constants/data";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [SectionContainerComponent, SectionTitleComponent, SkillBadgeComponent],
    templateUrl: './about.component.html',
})
export class AboutComponent {
    datas = Data;
    protected readonly Data = Data;

    getName(label: string): string {
        return label.toLowerCase();
    }
}