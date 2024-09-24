import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../api/ApiClient'
import { WebsiteFindResponse } from '../types/types'

export const useGlobalStore = defineStore('global', () => {

    const websiteFindResponse = ref<WebsiteFindResponse>({} as any)

    const websiteFind = () => {
        return new Promise((resolve, reject) => {
            apiClient.propertyFindFiltered({ filters: {}, propertyId: parseInt(import.meta.env.VITE_PROPERTY_ID) }).then((result) => {
                websiteFindResponse.value!.property = result
                setWebsiteDetails()
                resolve(websiteFindResponse.value)
            }).catch((err) => {
                reject(err)
            });
        })
    }

    const setWebsiteDetails = () => {
        websiteFindResponse.value!.website = {
            logo: '/rhactus-logo.png',
            email: 'kareem@rhactushotel.com',
            socialLinks: {
                facebook: 'https://www.facebook.com/rhactushotelnewalamein',
                instagram: 'https://www.instagram.com/rhactushotelnewalamein/?hl=en',
                tripadvisor: 'https://www.tripadvisor.com/Hotel_Review-g19980881-d23541968-Reviews-Rhactus_Hotel_New_Alamein-Marina_El_Alamein_Matrouh_Governorate.html'
            },
            footerParagrapgh: 'Rhactus San Stefano offers a perfect blend of luxury, comfort, and convenience in the heart of Alexandria. Experience exceptional hospitality, breathtaking views, and premium amenities for an unforgettable stay by the sea.',
            phone: '+201050555955',
            propertyDiscoverMore: {
                article: `Nestled in the vibrant San Stefano district of Alexandria, Rhactus Hotel offers a unique blend of modern luxury and rich cultural heritage. Designed to provide guests with a truly memorable experience, Rhactus combines world-class amenities with stunning views of the Mediterranean. Whether you're looking to unwind in our elegantly furnished rooms or explore the nearby attractions, Rhactus offers something for every traveler. <br> <br>
            Our hotel is more than just a place to stay; it’s an escape from the ordinary. From fine dining at our exclusive restaurants to relaxing by the pool or enjoying a stroll along the seafront, Rhactus ensures every moment of your stay is filled with comfort and pleasure. Discover the charm of Alexandria from the heart of one of its most iconic neighborhoods, and let Rhactus be your gateway to an unforgettable journey.`,
                images: ['/property-img1.jpg', '/property-img2.jpg']
            },
            bannerVideo : '/alex2.webm',
            sliderSlogan: 'Rhactus San Stefano – Where Luxury Meets the Mediterranean.',
            bannerSlogan: 'Experience Comfort, Embrace Elegance',
            partners: [
                {
                    partnerName: 'Rhactus New Alamein',
                    partnerImage: 'https://www.rhactushotel.com/images/uploads/2022319588257.jpg'
                },
                {
                    partnerName: 'Marina Hills',
                    partnerImage: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/487927693.jpg?k=6f5e0fcac6c03779aac9a8670a81915b27b936a7d64c4c4e8cd0a0a841e196ea&o=&hp=1'
                },
            ]
        }
    }


	return {
		websiteFind , websiteFindResponse
	}
})

