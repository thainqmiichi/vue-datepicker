<template>
    <div>
        <slot v-if="$slots['top-extra']" name="top-extra" :value="internalModelValue" />
        <template v-if="$slots['month-year']">
            <slot
                name="month-year"
                v-bind="{
                    years: groupedYears,
                    selectYear,
                }"
            />
        </template>
        <template v-else>
            <selection-overlay
                :items="groupedYears"
                :is-last="autoApply && !defaultedConfig.keepActionRow"
                :height="defaultedConfig.modeHeight"
                :config="config"
                :no-overlay-focus="Boolean(noOverlayFocus || textInput)"
                :focus-value="focusYear"
                type="year"
                use-relative
                @selected="selectYear"
                @hover-value="setHoverValue"
            >
                <template v-if="$slots['year-overlay-value']" #item="{ item }">
                    <slot name="year-overlay-value" :text="getJapaneseEra(item.value)" :value="item.value" />
                </template>
            </selection-overlay>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import { PickerBaseProps } from '@/props';
    import { useYearPicker } from '@/components/YearPicker/year-picker';
    import { useDefaults } from '@/composables';

    interface Era {
        name: string;
        start: number;
        symbol: string;
    }

    const emit = defineEmits([
        'update:internal-model-value',
        'reset-flow',
        'range-start',
        'range-end',
        'auto-apply',
        'update-month-year',
    ]);
    const props = defineProps({
        ...PickerBaseProps,
    });

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const { groupedYears, modelValue, focusYear, selectYear, setHoverValue } = useYearPicker(props, emit);
    const { defaultedConfig } = useDefaults(props);

    const eras: Era[] = [
        { name: '明治', start: 1868, symbol: 'M' },
        { name: '大正', start: 1912, symbol: 'T' },
        { name: '昭和', start: 1926, symbol: 'S' },
        { name: '平成', start: 1989, symbol: 'H' },
        { name: '令和', start: 2019, symbol: 'R' },
    ];

    const getJapaneseEra = (year: any): string => {
        const index = eras.map(e => e.start).indexOf(Number(year));
        const era = index !== -1 ? eras[index] : undefined;
        if (era) {
            const eraYear = year - era.start + 1;
            return `${year}年 (${era.name}${eraYear === 1 ? '元' : eraYear}年)`;
        }
        return `${year}年`;
    };

    const getSidebarProps = () => {
        return {
            modelValue,
            selectYear,
        };
    };

    defineExpose({ getSidebarProps, getJapaneseEra });
</script>
