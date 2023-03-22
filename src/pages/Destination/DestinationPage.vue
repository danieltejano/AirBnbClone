<template>
    <div class="flex flex-col gap-3 mb-12 ">
        <span class="text-2xl font-semibold">M San Rem Villa</span>
        <div class="flex justify-between items-end lg:items-start">
            <div class="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
                <!-- star -->
                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"/></svg>
                    <span>4.98</span>   
                    <span>·</span>
                    <span><u>62 reviews</u></span>
                </div>
                <!-- divider -->
                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4V2m-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24l.78 3.33Z"/></svg>
                    <span>Superhost</span>
                </div>
                <span class="hidden lg:block">·</span>
                <span><u>Bayan ng Remigio, Philippines</u></span>
            </div>
            <div class="flex gap-3">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M6 17a1 1 0 1 0-2 0h2Zm22 0a1 1 0 1 0-2 0h2Zm-13 3a1 1 0 1 0 2 0h-2Zm2-16.5a1 1 0 1 0-2 0h2ZM16 3l.707-.707a1 1 0 0 0-1.414 0L16 3Zm5.293 6.707a1 1 0 0 0 1.414-1.414l-1.414 1.414Zm-12-1.414a1 1 0 0 0 1.414 1.414L9.293 8.293ZM4 17v8h2v-8H4Zm3 11h18v-2H7v2Zm21-3v-8h-2v8h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2ZM4 25a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H4Zm13-5V3.5h-2V20h2ZM15.293 3.707l6 6l1.414-1.414l-6-6l-1.414 1.414Zm0-1.414l-6 6l1.414 1.414l6-6l-1.414-1.414Z"/></svg>
                    <span><u>Share</u></span>
                </div>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
                    <span><u>Save</u></span>
                </div>
            </div>
        </div>
        <!-- Photo Gallery -->
        <div class="grid grid-cols-4 gap-5 rounded-3xl group mb-5">
            <img class="w-full h-full col-span-4 lg:row-span-2 lg:col-span-2 lg:first:odd:rounded-l-xl" src="https://a0.muscache.com/im/pictures/46132386-ad38-4573-b0aa-420294cd9ec2.jpg?im_w=1200" alt="" srcset="">
            <img class="lg:group-[:nth-of-type(3)_&]:rounded-tr-3xl lg:last:odd:rounded-br-xl" src="https://a0.muscache.com/im/pictures/46132386-ad38-4573-b0aa-420294cd9ec2.jpg?im_w=1200" alt="" srcset="">
            <img class="lg:group-[:nth-of-type(3)_&]:rounded-tr-3xl lg:last:odd:rounded-br-xl" src="https://a0.muscache.com/im/pictures/46132386-ad38-4573-b0aa-420294cd9ec2.jpg?im_w=1200" alt="" srcset="">
            <img class="lg:group-[:nth-of-type(3)_&]:rounded-tr-3xl lg:last:odd:rounded-br-xl" src="https://a0.muscache.com/im/pictures/46132386-ad38-4573-b0aa-420294cd9ec2.jpg?im_w=1200" alt="" srcset="">
            <img class="lg:group-[:nth-of-type(3)_&]:rounded-tr-3xl lg:last:odd:rounded-br-xl" src="https://a0.muscache.com/im/pictures/46132386-ad38-4573-b0aa-420294cd9ec2.jpg?im_w=1200" alt="" srcset="">
        </div>
        <div class="flex flex-col md:flex-row w-full gap-5">
            <div class="flex-col lg:w-3/5 w-full">
                <!-- Destination Sub Header -->
                <div class="flex justify-between pb-5 border-b">
                    <div class="flex flex-col">
                        <span class="font-semibold text-xl">Entire villa hosted by Jose Marcelino</span>
                        <!-- Destination Statistics -->
                        <div class="flex justify-between">
                            <div class="flex gap-1 items-center">
                                <!-- star -->
                                <div class="flex gap-1 items-center">
                                    <span>8 guests</span>   
                                    <span>·</span>
                                    <span>3 bedrooms</span>
                                </div>
                                <span>·</span>
                                <!-- divider -->
                                <div class="flex gap-1 items-center">
                                    <span>5 beds</span>
                                </div>
                                <span>·</span>
                                <!-- divider -->
                                <div class="flex gap-1 items-center">
                                    <span>4 baths</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Destination Features -->
                <div class="flex flex-col gap-3 py-5 border-b">
                    <div class="flex gap-3">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path></svg>
                        <div class="flex flex-col text-gray-500">
                            <span class="font-semibold text-black">Self check-in</span>
                            <span class="text-sm">You can check in with the doorman.</span>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg>
                        <div class="flex flex-col text-gray-500">
                            <span class="font-semibold text-black">Jose Marcelino is a Super Host</span>
                            <span class="text-sm">Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</span>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                        <div class="flex flex-col text-gray-500">
                            <span class="font-semibold text-black">Jose Marcelino is a Super Host</span>
                            <span class="text-sm">94% of recent guesets gave the location a 5-star rating.</span>
                        </div>
                    </div>
                </div>
                <!-- AirCover -->
                <div class="flex flex-col gap-5 py-5 border-b">
                    <div class="flex gap-3">
                        <img height="26" class="h-7" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"/>
                    </div>
                    <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues liek trouble checking in.</p>
                </div>
                <!-- Host Description -->
                <div class="flex flex-col gap-5 py-5 border-b">
                    <p>My place is close to great views and the beach. You'll love my place because of the views, the high ceilings, the kitchen, and the location. My place is good for couples and families (with kids).</p>
                </div>
                <!-- Accomodation Details -->
                <div class="flex flex-col py-8 gap-5">
                    <span class="font-semibold text-xl">Where you'll sleep</span>
                    <div class="flex gap-3">
                        <!-- Accomodation Module -->
                        <div class="flex flex-col max-w-[12rem] border rounded-xl p-5 gap-3">
                            <div class="flex gap-2">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path></svg>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20 8a2 2 0 0 1 1.995 1.85L22 10v2h3.34a2 2 0 0 1 1.77 1.069l.069.143 2.578 6.017a3 3 0 0 1 .233.938l.01.244V28a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28v-7.59a3 3 0 0 1 .156-.954l.087-.227 2.578-6.017a2 2 0 0 1 1.68-1.206L6.659 12H10v-2a2 2 0 0 1 1.85-1.995L12 8zm8 14H4v6h24zm-6-8a2 2 0 0 1-1.85 1.995L20 16h-8a2 2 0 0 1-1.995-1.85L10 14H6.66l-2.573 6h23.825l-2.572-6zm-2-4h-8v4h8z"></path></svg>
                            </div>
                            <span class="font-semibold">Bedroom 1</span>
                            <span class="text-sm">1 king bed, 1 floor mattress</span>
                        </div>
                        <!-- Accomodation Module -->
                        <div class="flex flex-col max-w-[12rem] border rounded-xl p-5 gap-3">
                            <div class="flex gap-2">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path></svg>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20 8a2 2 0 0 1 1.995 1.85L22 10v2h3.34a2 2 0 0 1 1.77 1.069l.069.143 2.578 6.017a3 3 0 0 1 .233.938l.01.244V28a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28v-7.59a3 3 0 0 1 .156-.954l.087-.227 2.578-6.017a2 2 0 0 1 1.68-1.206L6.659 12H10v-2a2 2 0 0 1 1.85-1.995L12 8zm8 14H4v6h24zm-6-8a2 2 0 0 1-1.85 1.995L20 16h-8a2 2 0 0 1-1.995-1.85L10 14H6.66l-2.573 6h23.825l-2.572-6zm-2-4h-8v4h8z"></path></svg>
                            </div>
                            <span class="font-semibold">Bedroom 2</span>
                            <span class="text-sm">1 king bed, 1 floor mattress</span>
                        </div>
                        <!-- Accomodation Module -->
                        <div class="flex flex-col max-w-[12rem] border rounded-xl p-5 gap-3">
                            <div class="flex gap-2">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path></svg>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20 8a2 2 0 0 1 1.995 1.85L22 10v2h3.34a2 2 0 0 1 1.77 1.069l.069.143 2.578 6.017a3 3 0 0 1 .233.938l.01.244V28a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28v-7.59a3 3 0 0 1 .156-.954l.087-.227 2.578-6.017a2 2 0 0 1 1.68-1.206L6.659 12H10v-2a2 2 0 0 1 1.85-1.995L12 8zm8 14H4v6h24zm-6-8a2 2 0 0 1-1.85 1.995L20 16h-8a2 2 0 0 1-1.995-1.85L10 14H6.66l-2.573 6h23.825l-2.572-6zm-2-4h-8v4h8z"></path></svg>
                            </div>
                            <span class="font-semibold">Bedroom 3</span>
                            <span class="text-sm">1 king bed, 1 floor mattress</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-col w-2/5 bg-slate-50">
                <span>side</span>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DesinationPage',
    setup(){},
    data(){
        return{
            componentOptions: {}
        }
    }
})
</script>