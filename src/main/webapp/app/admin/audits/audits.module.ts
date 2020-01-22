import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RedisIntegrationJhiSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [RedisIntegrationJhiSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
