import { useI18n } from 'vue-i18n'
export default function () {
    const { t, te } = useI18n({ useScope: 'global' })
    const generateTitle = (title) => {
        // console.log(title)
        let hasKey = te('route.' + title)

        // console.log(hasKey)
        // let test = t('route.'+title)
        // console.log(test)

        if (hasKey) {
            return t('route.' + title)
        }
        return title
    }

    return {
        generateTitle
    }
}