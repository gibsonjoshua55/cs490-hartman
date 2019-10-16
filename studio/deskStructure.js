import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['site-config'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
