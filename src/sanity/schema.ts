import { propertyType } from './property'
import { locationType, developerType, propertyCategoryType } from './taxonomy'
import { leadType } from './lead'
import { blogType } from './blog'
import { siteSettingsType } from './siteSettings'

export const schema = {
  types: [
    propertyType,
    locationType,
    developerType,
    propertyCategoryType,
    leadType,
    blogType,
    siteSettingsType,
  ],
}
