<script lang="ts">

    //let imageUrl: string | null = null

    //imageUrl = "work/Apple_logo_black.svg";

    /*const downloadImage = async (path: string) => {
		try {
			//const { data, error } = await supabase.storage.from('steps').download(path)
            const { data, error } = await supabase.storage.from('steps').getPublicUrl(path)

			if (error) {
				throw error
			}

			const url = URL.createObjectURL(data)
			imageUrl = url
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message)
			}
		}
	}

    $: if (url) downloadImage(url)*/

</script>
